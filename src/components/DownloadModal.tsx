import { useEffect, useRef } from 'react';
import { config } from '../config';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Download Modal Component
 * 
 * Shows APK installation instructions for desktop users.
 * Keyboard accessible (Escape to close).
 */
export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus the modal when opened
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-daanveer-black/50 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 animate-scale-in"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 id="modal-title" className="text-2xl font-bold text-daanveer-black">
            Download Daanveer APK
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-daanveer-gray-light rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-daanveer-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Android icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-daanveer-green/10 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-daanveer-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 001 18h22a10.78 10.78 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
            </svg>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-4 mb-8">
          <p className="text-daanveer-gray text-center">
            Since you're on a desktop, follow these steps to install on your Android device:
          </p>
          
          <ol className="space-y-3 text-daanveer-black">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-daanveer-green text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>Download the APK file to your computer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-daanveer-green text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>Transfer the APK to your Android device (USB, email, or cloud)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-daanveer-green text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>On your device, go to <strong>Settings → Security → Unknown Sources</strong> and enable it</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-daanveer-green text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>Navigate to the APK file and tap to install</span>
            </li>
          </ol>
        </div>

        {/* Safety warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-amber-800">
              Only install from the official Daanveer website. Verify the APK signature before installation.
            </p>
          </div>
        </div>

        {/* Download button */}
        <a
          href={config.APK_DOWNLOAD_URL}
          download="daanveer.apk"
          className="btn-primary w-full text-center justify-center"
          aria-label="Download Daanveer APK file"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download APK
        </a>
      </div>
    </div>
  );
};

export default DownloadModal;
