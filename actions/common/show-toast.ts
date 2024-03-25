export const showToast = (toastRef: any, message: string, status?: number) => {
  let severity = "";

  switch (status) {
    case 200:
    case 201:
      severity = "success";
      break;
    case 400:
    case 401:
    case 403:
    case 404:
    case 500:
      severity = "error";
      break;
    default:
      severity = "info";
  }

  toastRef.current?.show({
    severity,
    detail: message,
    life: 3000,
  });
};
