import { render, screen } from "@testing-library/react";
import ErrorDisplay from ".";
import userEvent from "@testing-library/user-event";

describe("error display bileşeni", () => {
  test("doğru mesajı gösterir", () => {
    const errorMessage = "404 content was not found";
    render(<ErrorDisplay message={errorMessage} retry={() => {}} />);
    // doğru hata mesajına sahip yazı var mı?
    screen.getByText(errorMessage);
  });
  test("tekrar dene butonuna tıklnınca fonksiyon çalışır", async () => {
    // user kur
    const user = userEvent.setup();
    // bir test -mock  fonksiyonu oluştur
    const retryMock = jest.fn();
    // bileşeni renderla
    render(<ErrorDisplay message={"xx"} retry={retryMock} />);
    // butonu çağır
    const button = screen.getByRole("button");
    // butona tıkla
    await user.click(button);
    // fonksiyon çağrıldı mı kontrol et
    expect(retryMock).toHaveBeenCalled();
  });
});
