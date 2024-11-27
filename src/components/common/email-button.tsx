import { useEffect, useState } from "react";

const email = "diegogarciag63@gmail.com";

function EmailButton() {
  const [mount, setMount] = useState(false);
  const [modal, setModal] = useState<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!mount) {
      setMount(true);
      setModal(document.getElementById("mail_modal") as HTMLDialogElement);
    }

    return () => {
      setMount(false);
    };
  }, []);

  const copyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      // Use Clipboard API if available
      navigator.clipboard.writeText(email);
    } else {
      // Fallback: Create a temporary input element
      const tempInput = document.createElement("input");
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, tempInput.value.length); // For mobile
      document.execCommand("copy"); // Deprecated but works as a fallback
      document.body.removeChild(tempInput);
    }

    if (modal) {
      modal.showModal();

      setTimeout(() => {
        modal?.close();
      }, 2000);
    }
  };

  return (
    <>
      <button onClick={() => copyEmail()}>
        <div
          className='p-0 transition-transform hover:scale-105 tooltip'
          data-tip='Mail me :)'
        >
          <p className='text-4xl cursor-pointer' id='mailButton'>
            <i className='fa-solid fa-square-envelope'></i>
          </p>
        </div>
      </button>

      <dialog id='mail_modal' className='modal text-black'>
        <div className='modal-box'>
          <h3 className='text-lg text-center font-bold'>
            My Email Address was copied to your clipboard! 📋
          </h3>
        </div>
      </dialog>
    </>
  );
}

export default EmailButton;
