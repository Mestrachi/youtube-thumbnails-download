
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta Tags */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="A YouTube Thumbnail Downloader is a useful free tool for finding and downloading thumbnail images from YouTube videos in different sizes and qualities." />
          <meta name="keywords" content="YouTube Thumbnail Downloader, download YouTube thumbnail, YouTube video thumbnail, high-quality thumbnails, YouTube thumbnail images, free YouTube thumbnail downloader" />
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          {/* CSS */}
          <link rel="stylesheet" href="/styles.css" />
          {/* Title */}
          <title>YouTube Thumbnail Downloader - Download Free Thumbnails</title>
        </Head>
        <body style={{ backgroundColor: "red", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Affiliate link as a turnip */}
          <a href="https://www.wgmiacademy.io/?via=saasnocood" target="_blank" rel="noopener noreferrer" aria-label="WGMI Academy">
            <img src="/turnip.png" alt="Turnip" style={{ width: "100px", height: "100px", backgroundColor: "orange" }} />
          </a>
          {/* Text content */}
          <div style={{ width: "90%", maxWidth: "800px", padding: "20px", color: "black", fontSize: "16px", textAlign: "left" }}>
            {/* How to use section */}
            <h2 style={{ fontSize: "20px", marginBottom: "20px", color: "black" }}>How to Use:</h2>
            <p>I have shared some screenshots to guide you on how to use this YouTube downloader website. It's quite easy:</p>
            <ol>
              <li>Copy any YouTube link whose thumbnail you want.</li>
              <li>Paste the URL in the input box. It will automatically generate different sizes of thumbnails.</li>
              <li>Click on the thumbnail download button to download it to your system.</li>
            </ol>
            <p>If you are using an Android phone, you need to save the images. For iPhones, the process may vary.</p>
          </div>
          {/* Render the main content */}
          <Main />
          <NextScript />
          {/* Additional content */}
          <div style={{ width: "90%", maxWidth: "800px", padding: "20px", color: "black", fontSize: "16px", textAlign: "left" }}>
            {/* What is a YouTube Thumbnail Downloader? */}
            <h2 style={{ fontSize: "20px", marginTop: "20px", color: "black" }}>What is a YouTube Thumbnail Downloader?</h2>
            <p>A YouTube Thumbnail Downloader is a useful free tool for finding and downloading thumbnail images from YouTube videos. Each YouTube video can have up to five different sizes of thumbnails, which can be set up in your YouTube account within the video settings.</p>
            <p>To use a YouTube Thumbnail Downloader, you will need the YouTube video ID, which can be found in the URL of the video. Once you have the video ID, you can easily generate thumbnail URLs for the video by replacing "yt-video-id" in the URL with the actual ID.</p>
            <p>You can then go to one of these URLs to download the YouTube thumbnail image in different sizes and qualities. A good YouTube Thumbnail Downloader will allow you to choose the resolution of the thumbnail you want to download.</p>
            <p>It's important to note that while YouTube thumbnails are generally considered public domain images, it's still important to respect the copyright of the original creator. Make sure you have permission to use the thumbnail before you use it, and be mindful of YouTube's terms of service when using thumbnails in a way that implies endorsement by YouTube or the video's creator.</p>
            {/* Thumbnail URL Examples */}
            <h2 style={{ fontSize: "20px", marginTop: "20px", color: "black" }}>YouTube video thumbnail image URLs</h2>
            <p>You can use the following URLs to find the correct size and quality of your YouTube video thumbnail:</p>
            <ul>
              <li>Default: https://img.youtube.com/vi/yt-video-id/default.jpg</li>
              <li>High Quality: https://img.youtube.com/vi/yt-video-id/hqdefault.jpg</li>
              <li>Medium Quality: https://img.youtube.com/vi/yt-video-id/mqdefault.jpg</li>
              <li>Standard Definition: https://img.youtube.com/vi/yt-video-id/sddefault.jpg</li>
              <li>Maximum Resolution: https://img.youtube.com/vi/yt-video-id/maxresdefault.jpg</li>
            </ul>
          </div>
          {/* Newsletter Signup Box */}
          <div style={{ width: "90%", maxWidth: "800px", padding: "20px", marginTop: "20px", backgroundColor: "white", color: "black", borderRadius: "8px", textAlign: "center" }}>
            <h2 style={{ fontSize: "20px", marginBottom: "20px", color: "black" }}>Subscribe to Our Newsletter</h2>
            <p style={{ color: "black" }}>Stay updated with the latest tools, tips, and news. Enter your email below to subscribe:</p>
            <form action="/subscribe" method="post" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <input type="email" name="email" placeholder="Enter your email" required style={{ padding: "10px", width: "80%", maxWidth: "400px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />
              <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "white", borderRadius: "4px", border: "none", cursor: "pointer" }}>Subscribe</button>
            </form>
          </div>
          {/* Tool benefits */}
          <div style={{ width: "90%", maxWidth: "800px", padding: "20px", color: "black", fontSize: "16px", textAlign: "left" }}>
            <h2 style={{ fontSize: "20px", marginTop: "20px", color: "black" }}>How Our Tool Can Help:</h2>
            <p>Our YouTube Thumbnail Downloader tool simplifies the process of obtaining high-quality thumbnails from YouTube videos. By providing direct access to these thumbnails, our tool empowers content creators, marketers, and designers to:</p>
            <ul>
              <li>Create eye-catching thumbnails for their own videos</li>
              <li>Analyze competitors' thumbnails for inspiration and research</li>
              <li>Use thumbnails for presentations, social media posts, and other promotional materials</li>
            </ul>
          </div>
          {/* Privacy & Policy */}
          <div style={{ width: "90%", maxWidth: "800px", padding: "20px", color: "black", fontSize: "16px", textAlign: "left" }}>
            <h2 style={{ fontSize: "20px", marginTop: "20px", color: "black" }}>Privacy & Policy:</h2>
            <p>We take your privacy seriously. Our website respects your data and ensures that it is handled securely and in compliance with applicable privacy laws.</p>
            <p>We may collect certain information when you use our services, such as your IP address, browser type, and device information. This information is used for analytics purposes and to improve the functionality and performance of our website.</p>
            <p>We do not sell or share your personal information with third parties without your consent. However, please note that our website may contain links to third-party websites, and we are not responsible for the privacy practices or content of those sites.</p>
            <p>By using our website, you consent to the collection and use of your information as described in this Privacy & Policy statement. If you have any questions or concerns about our privacy practices, please contact us.</p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

