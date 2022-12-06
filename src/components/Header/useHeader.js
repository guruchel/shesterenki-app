import { useEffect, useRef, useState } from "react";
import { useEmailJS } from "../../hooks/useEmailJS";
import { useTablet } from "../../hooks/useMediaQuery";

export const useHeader = () => {
  const isTable = useTablet();
  const [aboutMySelf, setAboutMySelf] = useState("");
  const [isShowForm, setIsShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [IsOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isShowRequisites, setIsShowRequisites] = useState(false);
  const [isShowContact, setIsContact] = useState(false);
  const menuButton = useRef(null);
  const menuMobile = useRef(null);
  const RequisitesRef = useRef(null);
  const RequisitesButtonRef = useRef(null);
  const ContactButtonRef = useRef(null);
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );
  const { onFetchMail } = useEmailJS();
  const ScrollTo = (pixel = 0) => {
    return () => {
      window.scroll({ top: pixel, behavior: "smooth" });
      document.body.style.overflowY = "scroll";
      setIsOpenSidebar(false);
    };
  };
  useEffect(() => {
    if (IsOpenSidebar) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [IsOpenSidebar]);
  useEffect(() => {
    const onClick = (e) => {
      if (menuButton.current) {
        if (menuButton.current.contains(e.target)) {
          setIsOpenSidebar((prev) => !prev);
          setIsShowRequisites(false);
          return;
        }
      }
      if (menuMobile.current) {
        if (
          RequisitesButtonRef.current &&
          RequisitesButtonRef.current.contains(e.target)
        ) {
          setIsOpenSidebar(false);
          setIsShowRequisites((prev) => !prev);
          setIsShowForm(false);
          return;
        }
        if (menuMobile.current.contains(e.target)) {
          return;
        }
      }
      if (RequisitesButtonRef.current) {
        if (RequisitesButtonRef.current.contains(e.target)) {
          setIsShowRequisites((prev) => !prev);
          setIsShowForm(false);
          setIsContact(false);
          return;
        }
      }
      if (RequisitesRef.current) {
        if (RequisitesRef.current.contains(e.target)) {
          setIsContact(false);
          return;
        }
      }
      if (ContactButtonRef.current) {
        if (ContactButtonRef.current.contains(e.target)) {
          setIsContact(true);
          setIsShowRequisites(false);
          setIsShowForm(false);
          return;
        }
      }
      setIsShowRequisites(false);
      setIsContact(false);
      setIsOpenSidebar(false);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  const handleChange = (e, set) => {
    set(e.target.value);
  };
  const handleClose = () => {
    setIsShowRequisites(false);
    setIsOpenSidebar(false);
    document.body.style.overflowY = "scroll";
  };
  const handleOpenForm = () => {
    setIsShowForm((prev) => !prev);
  };
  const handleCloseRequsites = () => {
    setIsShowForm(false);
    document.body.style.overflowY = "scroll";
  };
  const handleCloseForm = () => {
    setIsShowForm(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      aboutMySelf,
      email,
      name,
      phone,
    };
    onFetchMail(data);
  };
  const handleContact = () => {
    setIsContact((prev) => !prev);
  };

  return {
    isTable,
    ScrollTo,
    menuButton,
    menuMobile,
    IsOpenSidebar,
    handleChange,
    handleSubmit,
    RequisitesRef,
    handleClose,
    isShowForm,
    handleOpenForm,
    setAboutMySelf,
    setEmail,
    setName,
    setPhone,
    aboutMySelf,
    email,
    name,
    phone,
    RequisitesButtonRef,
    scrollHeight,
    // handleClickMenu,
    isShowRequisites,
    handleCloseForm,
    handleContact,
    isShowContact,
    ContactButtonRef,
    handleCloseRequsites,
  };
};
