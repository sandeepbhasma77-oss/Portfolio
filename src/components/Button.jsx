/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Prevent default anchor tag behavior (jump-to)

        const target = document.getElementById("counter"); // Get target section

        // Only scroll if target element exists and an ID is provided
        // taht prevents the contact button from scrolling to the top
        if (target && id) {
          const offset = window.innerHeight * 0.15; // Offset from top (15% of viewport height)

          // Calculate the target scroll position
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          // Smooth scroll to the calculated position
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Apply base wrapper + any custom class
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
