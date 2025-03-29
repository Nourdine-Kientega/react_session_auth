import { useEffect, useState } from 'react';

interface AlertPanelComponentProps {
  backgroundColor: string;
  content: string;
}

const AlertPanelComponent = ({ backgroundColor, content }: AlertPanelComponentProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  // Inline styles for the alert panel
  const alertStyles = {
    backgroundColor: backgroundColor || '#f8d7da', // Default to light red if no color is provided
    color: '#721c24', // Text color for the alert (dark)
    borderRadius: '8px', // Rounded corners
    padding: '15px 20px', // Padding around the content
    margin: '10px 0', // Space between alerts
    fontSize: '16px', // Font size for the alert text
    display: 'flex', // Use flexbox to align items inside the alert
    alignItems: 'center', // Align content vertically
    justifyContent: 'space-between', // Space between content and close button
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Light shadow for a modern feel
    transition: 'all 0.3s ease', // Smooth transition for background color change
  };

  // Close button style
  const closeButtonStyles = {
    background: 'transparent',
    border: 'none',
    color: '#721c24',  // Same color as the text
    fontSize: '20px',
    cursor: 'pointer',
    paddingLeft: '10px'
  };

  return (
    <div style={alertStyles}>
      <span>{content}</span>
      <button style={closeButtonStyles} onClick={() => setIsVisible(false)}>
        &times;
      </button>
    </div>
  );
};

export default AlertPanelComponent;
