import Footer from './Footer';
import { useCollapse } from 'react-collapsed';
import React, { useState } from "react";

const Contact = () => {

    // State and handler for each collapsible section
    const [isExpanded1, setExpanded1] = useState(false);
    const [isExpanded2, setExpanded2] = useState(false);
    const [isExpanded3, setExpanded3] = useState(false);

    // Handler for toggling the first collapsible section
    function handleOnClick1() {
        setExpanded1(!isExpanded1);
    }

    // Handler for toggling the second collapsible section
    function handleOnClick2() {
        setExpanded2(!isExpanded2);
    }

    function handleOnClick3() {
        setExpanded3(!isExpanded3);
    }
    const { getCollapseProps: getCollapseProps1, getToggleProps: getToggleProps1 } = useCollapse({ isExpanded: isExpanded1 });
    const { getCollapseProps: getCollapseProps2, getToggleProps: getToggleProps2 } = useCollapse({ isExpanded: isExpanded2 });
    const { getCollapseProps: getCollapseProps3, getToggleProps: getToggleProps3 } = useCollapse({ isExpanded: isExpanded3 });

    const handleSubmit = () => {
        window.alert('Message sent successfully!');
      };
    return (
        <div className="contact">
            <div className='mainContact'>
                <br />
                <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', fontSize: '2.5em'}}>Contact</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                    <label htmlFor="question">Question</label>
                    <textarea id="question" cols="20" rows="5"></textarea>
                    <button type="submit">Send</button>
                </form>
                <br />
            </div>
            <h1 style={{ justifyContent: 'center', display: 'flex' }}>Frequently Asked Questions</h1>
            <div className='fqa'>
                <div className="collapsible">
                    <div className="header" {...getToggleProps1({ onClick: handleOnClick1 })}>
                        Q: How can I contact customer support for assistance?
                    </div>
                    <div {...getCollapseProps1()}>
                        <div className="content">
                            <p>A: If you have any questions, concerns, or need assistance, you can reach our friendly
                                support team via email at contact@gamewave.com or by calling our helpline at +1 (555) 123-4567 during our business hours.</p>
                        </div>
                    </div>
                </div>
                <div className="collapsible">
                    <div className="header" {...getToggleProps2({ onClick: handleOnClick2 })}>
                        Q: How can I purchase games on GameWave?
                    </div>
                    <div {...getCollapseProps2()}>
                        <div className="content">
                            <p>A: To purchase games, navigate to the "Game" section, browse the available titles, and select the game you want.
                                Click on the "Buy Now" button, and you'll be guided through
                                the secure checkout process to complete your purchase.</p>
                        </div>
                    </div>
                </div>

                <div className="collapsible">
                    <div className="header" {...getToggleProps3({ onClick: handleOnClick3 })}>
                        Q: Can I refund a game if I change my mind after purchase?
                    </div>
                    <div {...getCollapseProps3()}>
                        <div className="content">
                            <p>A: Game refunds are subject to the individual game developers' refund policies. Generally,
                                if you encounter any issues with your purchase, please contact our support team, and we'll do our
                                best to assist you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;