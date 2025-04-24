export default function Loading() {
    return (
        <div className="h-screen w-full flex justify-center items-center gap-2 bg-white">
            <div className="w-3 h-3 bg-main rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-main rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-main rounded-full animate-bounce delay-150"></div>
            <div className="w-3 h-3 bg-main rounded-full animate-bounce delay-200"></div>
        </div>
    );
  }