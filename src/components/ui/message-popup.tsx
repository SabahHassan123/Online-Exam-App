type MessageProps = {
    messageText: string;
    show: boolean;
  };
  
  export default function Message({ messageText, show }: MessageProps) {
    return (
      <section
        className={`fixed top-4 right-4 w-80 h-16 bg-indigo-50 text-gray-600 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 ease-in-out
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
      >
        <p className="first-letter:uppercase">{messageText}!</p>
      </section>
    );
  }
  