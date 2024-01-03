import { Container } from "../../components";
import footer from "../../assets/image/footer.png";

function Footer() {
  return (
    <div className="bg-[#FFF4E9]">
      <Container className="flex justify-center items-center py-11">
        <img src={footer} alt="" />
      </Container>
    </div>
  );
}

export default Footer;
