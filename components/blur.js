import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    const handleWindowBlur = () => {
      console.log("Window lost focus!");
      // pause video or stop animation
    };

    if (typeof window !== "undefined") {
      window.addEventListener("blur", handleWindowBlur);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("blur", handleWindowBlur);
      }
    };
  }, [handleWindowBlur]); // add handleWindowBlur to dependency array

  return (
    // your component's JSX
  );
}
