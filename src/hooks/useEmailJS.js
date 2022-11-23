import emailjs from "emailjs-com";

export const useEmailJS = () => {
  const serviceId = "service_dqx8r8q";
  const templateId = "template_0tla7v5";
  const publickKey = "m_TwnLl8xGSc1-x69";

  const onFetchMail = async (formValue) => {
    return await emailjs
      .send(serviceId, templateId, formValue, publickKey)
      .then((error) => {
        return error;
      });
  };
  return { onFetchMail };
};
