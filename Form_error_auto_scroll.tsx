    import React, { useEffect } from 'react';
    import { useFormikContext } from 'formik';

    const ScrollToError = () => {
      const { submitCount, isValid, errors } = useFormikContext();

      useEffect(() => {
        // Only run on submit and if the form is invalid
        if (submitCount === 0 || isValid) {
          return;
        }

        // Find the first error message element (adjust selector if needed)
        // This example assumes error messages are associated with an element
        // that can be targeted by a CSS selector (e.g., has a specific class or data attribute).
        const firstErrorField = Object.keys(errors)[0];
        if (firstErrorField) {
          const element = document.querySelector(`[name="${firstErrorField}"]`); // Or a more specific selector
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Optionally, focus the element
            if (element instanceof HTMLElement) {
              element.focus();
            }
          }
        }
      }, [submitCount, isValid, errors]);

      return null; // This component doesn't render anything
    };

    export default ScrollToError;

////paste the component inside the form
<form><ScrollTolError/></form>
