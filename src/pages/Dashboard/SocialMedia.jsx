import { TvRounded } from '@mui/icons-material';
import './SocialMedia.scss';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'Discord',
      icon: <svg width="56" height="42" viewBox="0 0 56 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="_cardIcon_mhdxw_48"><path d="M47.443 3.91477C47.1543 3.58639 46.8174 3.35183 46.4324 3.2111C44.8442 2.69507 40.5129 1.33464 36.2297 0.490234C36.0372 0.490234 35.989 0.490234 35.8447 0.67788C35.5559 1.14699 34.8821 2.17905 34.449 3.25801C34.449 3.25801 31.2727 2.88272 28.0001 2.88272C24.7276 2.88272 21.5512 3.25801 21.5512 3.25801C21.1181 2.22596 20.4443 1.14699 20.1556 0.67788C20.0112 0.490234 19.9631 0.490234 19.7706 0.490234C15.4874 1.33464 11.156 2.69507 9.56787 3.2111C9.18286 3.35183 8.84598 3.58639 8.55722 3.91477C-1.16423 15.6895 0.0870467 31.7801 0.375803 34.1257C0.375803 34.3134 0.472055 34.501 0.664558 34.5948C5.3809 38.4885 13.1292 41.1624 14.188 41.4908C14.2842 41.5377 14.3323 41.4908 14.3805 41.4439C15.8724 39.6613 16.9311 37.4564 17.2199 36.8935C17.268 36.7997 17.2199 36.7058 17.1236 36.6589C14.573 35.58 12.8886 34.4072 12.8886 34.4072C13.2736 34.1257 13.7548 33.7035 13.7548 33.7035C17.0755 35.5331 23.9094 36.7058 28.0001 36.7058C32.0908 36.7058 38.9247 35.58 42.2454 33.7035C42.2454 33.7035 42.7267 34.1257 43.1117 34.4072C43.1117 34.4072 41.4273 35.58 38.8285 36.612C38.7803 36.6589 38.7322 36.7528 38.7322 36.8466C39.021 37.4564 40.1279 39.6144 41.6198 41.4439C41.6679 41.4908 41.7641 41.5377 41.8123 41.4908C42.871 41.1624 50.6193 38.4885 55.3838 34.5948C55.5282 34.4541 55.6244 34.3134 55.6726 34.1257C55.8651 31.7801 57.1645 15.6895 47.443 3.91477ZM18.6155 28.3087C15.9205 28.3087 13.7548 25.8693 13.7548 22.9139C13.7548 19.9585 15.9205 17.5191 18.6155 17.5191C21.3106 17.5191 23.4763 19.9585 23.4763 22.9139C23.4763 25.8693 21.3106 28.3087 18.6155 28.3087ZM37.3847 28.3087C34.6896 28.3087 32.524 25.8693 32.524 22.9139C32.524 19.9585 34.6896 17.5191 37.3847 17.5191C40.0797 17.5191 42.2454 19.9585 42.2454 22.9139C42.2454 25.8693 40.0797 28.3087 37.3847 28.3087Z" fill="currentColor"></path></svg>,
      color: '#5865F2',
      action: 'Join',
      description: 'Platform'
    },
    {
      name: 'Facebook',
      icon: <svg width="32" height="66" viewBox="0 0 32 66" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="_cardIcon_mhdxw_48"><path d="M24.738 13.6469H31.6364V0.636719H21.9786H20.9274C13.6349 0.636719 7.72194 6.46217 7.72194 13.6469V20.1844H0.363647V33.1945H7.72194V65.364H21.9786V33.1945H31.6364V20.1844H21.9786V16.1713C21.9786 16.1713 22.5042 13.6469 24.738 13.6469Z" fill="currentColor"></path></svg>,
      color: '#1877F2',
      action: 'Follow',
      description: 'Platform'
    },
    {
      name: 'Instagram',
      icon: <svg width="64" height="66" viewBox="0 0 64 66" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="_cardIcon_mhdxw_48"><path d="M46.2721 0.666992H17.7281C7.93612 0.666992 0.00012207 8.76832 0.00012207 18.7643V47.903C0.00012207 57.899 7.93612 66.0003 17.7281 66.0003H46.2721C56.0641 66.0003 64.0001 57.899 64.0001 47.903V18.7643C64.0001 8.76832 56.0641 0.666992 46.2721 0.666992ZM59.5841 47.903C59.5841 55.4163 53.6321 61.4923 46.2721 61.4923H17.7281C10.3681 61.4923 4.41614 55.4163 4.41614 47.903V18.7643C4.41614 11.251 10.3681 5.17499 17.7281 5.17499H46.2721C53.6321 5.17499 59.5841 11.251 59.5841 18.7643V47.903Z" fill="currentColor"></path><path d="M31.9999 16.667C22.4071 16.667 14.6666 24.4736 14.6666 34.0003C14.6666 43.527 22.4732 51.3337 31.9999 51.3337C41.5928 51.3337 49.3333 43.527 49.3333 34.0003C49.3333 24.4736 41.5928 16.667 31.9999 16.667ZM31.9999 46.7688C24.9872 46.7688 19.2315 41.0131 19.2315 34.0003C19.2315 26.9876 24.9872 21.2319 31.9999 21.2319C39.0127 21.2319 44.7684 26.9876 44.7684 34.0003C44.7684 41.0131 39.0788 46.7688 31.9999 46.7688Z" fill="currentColor"></path><path d="M50.6665 19.334C52.8756 19.334 54.6665 17.5431 54.6665 15.334C54.6665 13.1248 52.8756 11.334 50.6665 11.334C48.4574 11.334 46.6665 13.1248 46.6665 15.334C46.6665 17.5431 48.4574 19.334 50.6665 19.334Z" fill="currentColor"></path></svg>,
      color: '#E4405F',
      action: 'Follow',
      description: 'Platform'
    },
    {
      name: 'LinkedIn',
      icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="_cardIcon_mhdxw_48"><path d="M11.6641 17.7363H1.71716V51.505H11.6641V17.7363Z" fill="currentColor"></path><path d="M40.3326 16.7666C33.5483 16.7666 29.9776 19.9802 28.1922 22.5818V17.7358H18.2452V51.5045H28.1922V32.7328C28.1922 31.9166 28.3962 31.1004 28.8553 30.4373C29.8755 28.805 31.4569 26.7646 34.2624 26.7646C38.0372 26.7646 41.1998 30.0292 41.1998 33.5999C41.1998 34.8242 41.1998 36.0484 41.1998 37.1706V41.2515V51.5045H51.1467V41.2515V37.1706V30.4373C51.1467 30.4373 51.6569 16.7666 40.3326 16.7666Z" fill="currentColor"></path><path d="M6.66525 0.495117C3.45161 0.495117 0.850098 3.09663 0.850098 6.31027C0.850098 9.52391 3.45161 12.1254 6.66525 12.1254C9.87889 12.1254 12.4804 9.52391 12.4804 6.31027C12.4804 3.09663 9.87889 0.495117 6.66525 0.495117Z" fill="currentColor"></path></svg>,
      color: '#0A66C2',
      action: 'Follow',
      description: 'Platform'
    },
    {
      name: 'X',
      icon:<svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="_cardIcon_mhdxw_48"><path d="M29.8061 21.2059L48.3558 0H43.7605L27.7825 18.2527L14.9663 0H0L19.4351 27.7687L0 50H4.59528L21.5008 30.6809L35.0337 50H50L29.8061 21.2059ZM6.99831 3.40443H12.774L43.0017 46.5956H37.226L6.99831 3.40443Z" fill="currentColor"></path></svg>,
      color: '#000000',
      action: 'Follow',
      description: 'Platform'
    },
    {
      name: 'Youtube',
      icon: <svg width="66" height="49" viewBox="0 0 66 49" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="_cardIcon_mhdxw_48"><path d="M64.2491 10.3701C63.4007 3.02807 59.0173 2.17545 55.2467 1.51229C51.4761 0.849142 33 0.612305 33 0.612305C33 0.612305 14.5711 0.801774 10.7534 1.51229C6.9356 2.17545 2.5994 3.02807 1.75101 10.3701C1.09116 16.1964 0.76123 20.5068 0.76123 24.3437C0.76123 28.1805 1.09116 32.4909 1.75101 38.3172C2.5994 45.6592 6.98273 46.5119 10.7534 47.175C14.524 47.8382 33 48.075 33 48.075C33 48.075 51.4289 47.8855 55.2467 47.175C59.0173 46.5119 63.4007 45.6592 64.2491 38.3172C64.9089 32.4909 65.2388 28.1805 65.2388 24.3437C65.2388 20.5068 64.9089 16.1964 64.2491 10.3701ZM25.2703 35.0962V13.5911L42.7094 24.3437L25.2703 35.0962Z" fill="currentColor"></path></svg>,
      color: '#FF0000',
      action: 'Subscribe',
      description: 'Platform'
    }
  ];

  return (
    <div className="social-media">
      <div className="dark-card">
        <div className='card-header'>
          <div className="header-icon"><TvRounded sx={{ fontSize: 30 }} /></div>
          <h1>Social Media</h1>
        </div>
        <div className='card-body'>
          <div className="social-description">
            <p>
              Follow us on our social media where you can see our community updates, events, and much more. You can find us
              on all major platforms, just choose your favourite one!
            </p>
          </div>
        </div>
      </div>

      <div className="social-platforms">
        {socialPlatforms.map((platform, index) => (
          <div key={index} className="platform-card">
            <div className="platform-header">
              <div
                className="platform-icon"
                style={{ backgroundColor: platform.color }}
              >
                {platform.icon}
              </div>
              <div className="platform-info">
                <span className="platform-label">{platform.description}</span>
                <h3 className="platform-name">{platform.name}</h3>
              </div>
            </div>
            <button
              className="platform-action-btn"
              style={{ backgroundColor: platform.color }}
            >
              {platform.action} 🔗
            </button>
          </div>
        ))}
      </div>

      <div className="page-footer">
        <div className="footer-links">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;