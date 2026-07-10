import { MdKeyboardArrowDown } from "react-icons/md";

function ScrollIndicator() {
  const handleScroll = () => {
    document.getElementById("next-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-6 flex items-center justify-center">
      <MdKeyboardArrowDown
        onClick={handleScroll}
        className="h-10 w-10 text-dark-primary animate-luxScrollFast cursor-pointer"
        style={{
          filter:
            "drop-shadow(0 0 8px rgba(242, 202, 80, 0.6)) drop-shadow(0 0 15px rgba(242, 202, 80, 0.3))",
        }}
      />
    </div>
  );
}

export default ScrollIndicator;
