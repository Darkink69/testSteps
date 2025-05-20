import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

const TelegramWebApp = () => {
  useEffect(() => {
    // Проверяем, что мы в Telegram WebApp
    if (WebApp.initDataUnsafe) {
      WebApp.ready();

      // Устанавливаем обработчик события закрытия
      WebApp.onEvent("viewportChanged", (isStateStable: boolean) => {
        if (isStateStable) {
          console.log("Viewport stabilized");
        }
      });

      // Настраиваем основную кнопку
      WebApp.MainButton.setText("Confirm")
        .setParams({ color: "#32CD32", text_color: "#FFFFFF" })
        .onClick(() => {
          WebApp.sendData("Confirmed!");
          WebApp.close();
        })
        .show();
    }

    return () => {
      WebApp.MainButton.hide();
      WebApp.offEvent("viewportChanged");
    };
  }, []);

  return (
    <div style={{ padding: "16px" }}>
      <h2>Telegram WebApp Demo</h2>
      <p>User: {WebApp.initDataUnsafe?.user?.username || "Guest"}</p>
    </div>
  );
};

export default TelegramWebApp;
