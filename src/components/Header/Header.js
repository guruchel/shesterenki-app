import React from "react";
import { useMobile } from "../../hooks/useMediaQuery";
import styles from "./header.module.css";
import { useHeader } from "./useHeader";
import ReactDOM from "react-dom";
import CloseIcon from "./CloseIcon";
// import { useHeader } from "./useHeader";

const Header = () => {
  const isMobile = useMobile();
  const {
    menuButton,
    IsOpenSidebar,
    isShowContact,
    handleChange,
    handleSubmit,
    setAboutMySelf,
    handleContact,
    setEmail,
    setName,
    setPhone,
    isShowForm,
    handleOpenForm,
    aboutMySelf,
    email,
    name,
    phone,
    RequisitesRef,
    handleCloseForm,
    RequisitesButtonRef,
    handleCloseRequsites,
    // handleClickMenu,
    isShowRequisites,
    ContactButtonRef,
    ScrollTo,
  } = useHeader();
  return (
    <header className={styles.header}>
      {isMobile && (
        <button
          ref={menuButton}
          className={
            IsOpenSidebar ? styles.mobileButtonActive : styles.mobileButton
          }>
          <span />
        </button>
      )}
      {isMobile && (
        <div className={IsOpenSidebar ? styles.menuActive : styles.menu}>
          <h3 className={styles.menuTitle}>МЕНЮ</h3>
          <ul className={styles.ulMenu}>
            <li className={styles.liMenu} ref={RequisitesButtonRef}>
              Реквизиты
            </li>
            <li className={styles.liMenu} onClick={handleOpenForm}>
              Обратная связь
            </li>
            <li
              className={styles.liMenu}
              onClick={handleContact}
              ref={ContactButtonRef}>
              Контакты
            </li>
            <li className={styles.liMenu} onClick={ScrollTo()}>
              Каталог
            </li>
          </ul>
        </div>
      )}
      <h1 className={styles.title}>СПЕЦТЕХНИКА.74</h1>
      {!isMobile && (
        <ul className={styles.ul}>
          <li className={styles.li} ref={RequisitesButtonRef}>
            Реквизиты
          </li>
          <li className={styles.li} onClick={handleOpenForm}>
            Обратная связь
          </li>
          <li
            className={styles.li}
            onClick={handleContact}
            ref={ContactButtonRef}>
            Контакты
          </li>
          <li className={styles.li} onClick={ScrollTo()}>
            Каталог
          </li>
        </ul>
      )}
      {!isMobile && (
        <div
          className={
            isShowRequisites ? styles.requisitesActive : styles.requisites
          }
          ref={RequisitesRef}>
          <p>
            ИП Жижелева Елена Сергеевна <br />
            E-mail:89193563142@mail.ru
            <br />
            Телефон:+ 7-919-356 31-42
            <br /> ИНН:744817458551
          </p>
        </div>
      )}
      {isMobile &&
        isShowRequisites &&
        ReactDOM.createPortal(
          <div
            className={styles.requisitesOverlay}
            onClick={handleCloseRequsites}>
            <div
              className={
                isShowRequisites ? styles.requisitesActive : styles.requisites
              }
              ref={RequisitesRef}>
              <p>
                E-mail:89193563142@mail.ru <br />
                <br /> Телефон:+ 7-919-356 31-42
              </p>
            </div>
          </div>,
          document.body,
        )}
      {!isMobile && (
        <div
          className={
            isShowContact ? styles.requisitesActive : styles.requisites
          }
          ref={RequisitesRef}>
          <p>
            E-mail:89193563142@mail.ru <br />
            Телефон:+ 7-919-356 31-42
          </p>
        </div>
      )}

      {isMobile &&
        isShowContact &&
        ReactDOM.createPortal(
          <div
            className={styles.requisitesOverlay}
            onClick={handleCloseRequsites}>
            <div
              className={
                isShowContact ? styles.requisitesActive : styles.requisites
              }
              ref={RequisitesRef}>
              <p>
                E-mail:89193563142@mail.ru
                <br /> Телефон:+ 7-919-356 31-42
              </p>
            </div>
          </div>,
          document.body,
        )}

      {!isMobile && (
        <div
          className={
            isShowForm ? styles.formWrapperActive : styles.formWrapper
          }>
          <form onSubmit={handleSubmit} className={styles.form}>
            <CloseIcon handleContact={handleCloseForm} />
            <textarea
              value={aboutMySelf}
              className={styles.textarea}
              onChange={(e) => handleChange(e, setAboutMySelf)}
              placeholder={"Напишите что-нибудь"}
            />
            <div className={styles.rightSide}>
              <input
                value={name}
                onChange={(e) => handleChange(e, setName)}
                required={true}
                className={styles.input}
                placeholder={"Фамилия Имя Отчество"}
              />
              <input
                type={"email"}
                className={styles.input}
                value={email}
                required={true}
                onChange={(e) => handleChange(e, setEmail)}
                placeholder={"E-mail для обратной связи"}
              />
              <input
                type={"tel"}
                className={styles.input}
                value={phone}
                required={true}
                onChange={(e) => handleChange(e, setPhone)}
                placeholder={"Номер телефона"}
              />
              <button className={styles.button} type="submit">
                Отправить
              </button>
            </div>
          </form>
        </div>
      )}

      {isMobile &&
        isShowForm &&
        ReactDOM.createPortal(
          <div className={styles.requisitesOverlay} onClick={handleCloseForm}>
            <div
              onClick={(e) => e.stopPropagation()}
              className={styles.formWrapper}>
              <h3 className={styles.formFeedbackTitle}>ОБРАТНАЯ СВЯЗЬ</h3>
              <form className={styles.form}>
                <CloseIcon handleContact={handleCloseForm} />
                <textarea
                  className={styles.textarea}
                  onChange={(e) => handleChange(e, setAboutMySelf)}
                  value={aboutMySelf}
                  placeholder={"Напишите что-нибудь"}
                />
                <div className={styles.rightSide}>
                  <input
                    className={styles.input}
                    onChange={(e) => handleChange(e, setName)}
                    value={name}
                    placeholder={"Фамилия Имя Отчество"}
                  />
                  <input
                    className={styles.input}
                    onChange={(e) => handleChange(e, setEmail)}
                    value={email}
                    placeholder={"E-mail для обратной связи"}
                  />
                  <input
                    className={styles.inputLast}
                    onChange={(e) => handleChange(e, setPhone)}
                    value={phone}
                    placeholder={"Номер телефона"}
                  />
                  <button onClick={handleSubmit} className={styles.button}>
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
};

export default React.memo(Header);
