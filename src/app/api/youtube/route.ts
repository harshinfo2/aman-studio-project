import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export async function GET() {
  try {
    // We are using a generic YouTube RSS feed URL format.
    // NOTE: To make this work with Aman Studio, you need to provide the Channel ID.
    // Replace 'YOUR_CHANNEL_ID_HERE' with the actual YouTube Channel ID (starts with UC...)
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UCoOgyOXxZlW1rVPouwLfYuQ'; // Placeholder channel ID for now
    
    const parser = new Parser({
      customFields: {
        item: ['media:group', 'media:thumbnail', 'yt:videoId']
      }
    });

    const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`);
    
    const videos = feed.items.map((item: any) => {
      // Extract YouTube video ID
      const videoId = item['yt:videoId'];
      // Build thumbnail URL directly from video ID (fallback to any provided thumbnail)
      const fallbackThumbnail = item['media:group'] && item['media:group']['media:thumbnail'] ? item['media:group']['media:thumbnail'][0].$.url : '';
      const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : fallbackThumbnail;

      // Categorize based on title
      const titleLower = (item.title || "").toLowerCase();
      let category = 'films';
      if (titleLower.includes('pre') && (titleLower.includes('wed') || titleLower.includes('shoot'))) {
        category = 'prewed';
      } else if (titleLower.includes('wedding') || titleLower.includes('shadi') || titleLower.includes('marriage')) {
        category = 'weddings';
      } else if (titleLower.includes('shoot') || titleLower.includes('photo') || titleLower.includes('model') || titleLower.includes('portrait')) {
        category = 'photoshoots';
      }

      return {
        id: videoId || item.id,
        category: category,
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
