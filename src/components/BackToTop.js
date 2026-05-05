import React, { useState, useEffect } from "react";

const BackToTop = ({ scrollRef }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const onScroll = () => setVisible(el.scrollTop > 300);
        el.addEventListener("scroll", onScroll);
        return () => el.removeEventListener("scroll", onScroll);
    }, [scrollRef]);

    const scrollToTop = () => {
        const el = scrollRef.current;
        if (el) el.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={visible ? "back-to-top visible" : "back-to-top"}
            onClick={scrollToTop}
        >
            <i className="fa fa-chevron-up"></i>
        </button>
    );
};

export default BackToTop;
