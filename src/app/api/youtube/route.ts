import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export async function GET() {
  try {
    // We are using a generic YouTube RSS feed URL format.
    // NOTE: To make this work with Aman Studio, you need to provide the Channel ID.
    // Replace 'YOUR_CHANNEL_ID_HERE' with the actual YouTube Channel ID (starts with UC...)
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UC-9-kyTW8ZkZNDHQJ6FgpwQ'; // Placeholder channel ID for now
    
    const parser = new Parser({
      customFields: {
        item: ['media:group', 'media:thumbnail', 'yt:videoId']
      }
    });

    const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`);
    
    const videos = feed.items.map((item: any) => {
      // Safely extract thumbnail and video ID
      const mediaGroup = item['media:group'];
      const thumbnail = mediaGroup && mediaGroup['media:thumbnail'] ? mediaGroup['media:thumbnail'][0].$.url : '';
      const videoId = item['yt:videoId'];

      return {
        id: videoId || item.id,
        category: 'films',
        title: item.title,
        type: 'video',
        url: thumbnail,
        youtubeId: videoId,
        description: item.contentSnippet || item.title,
      };
    });

    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching YouTube RSS feed:', error);
    return NextResponse.json({ error: 'Failed to fetch YouTube videos' }, { status: 500 });
  }
}
