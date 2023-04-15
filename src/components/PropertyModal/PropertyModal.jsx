import {
  Title,
  Flex,
  Box,
  Image,
  Group,
  CloseButton,
} from "@mantine/core";
import "../../app.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from 'embla-carousel-autoplay';
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import AgentCard from "../AgentCard/AgentCard";
import WhatsappButton from "../Buttons/WhatsappButton";
import PhoneNumberButton from "../Buttons/phoneNumberButton";
import { useRef } from "preact/hooks";
function PropertyModal({ modalData, closeModal, modalOpen }) {
  // const agency = modalData?.get("agencyPointer")?.get("agencyName")

  // let slides = null;
  // const imgUrls = () => {};
  // if (modalData) {
  //   slides = modalData.map((url) => (
  //     <Carousel.Slide key={url}>
  //       <Image
  //         src={
  //           new URL(`../../assets/images/${url}HQ.webp`, import.meta.url).href
  //         }
  //         alt="vv"
  //       />
  //     </Carousel.Slide>
  //   ));
  // }
  const phoneNumber = modalData?.get("agentPointer").attributes.phoneNumber;
  const propertyCode = modalData?.get("agentPointer").attributes.propertyCode;
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <>
      {modalOpen.value && (
        <div className="container" onClick={() => closeModal()}>
          <div className="modal--window" >
            <div className="modal-details" onClick={(e) => e.stopPropagation()}>
              <Group bg="white" w="100%" position="right" pr={10} sx={{ position: "sticky", top: 0,alignItems:"flex-end" ,zIndex:11}}>
                <CloseButton
                  aria-label="Close modal"
                  size="xl"
                  onClick={() => closeModal()}
                />
              </Group>
              <Title w="100%" mb={20} ta="center">
                {modalData?.get("adName")}
              </Title>
              <Carousel
                maw={600}
                mx="auto"
                slideSize="100%"
                slideGap="xs"
                controlsOffset="xs"
                withIndicators
                loop
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
              >
                {modalData && (
                  <Carousel.Slide>
                    <Image
                      src={modalData?.get("pic0")?._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic1")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic1")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic2")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic2")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic3")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic3")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic4")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic4")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic5")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic5")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic6")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic6")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic7")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic7")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic8")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic8")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic9")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic9")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic10")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic10")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic11")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic11")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic12")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic12")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic13")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic13")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {modalData?.get("pic14")?._url && (
                  <Carousel.Slide>
                    <Image
                      src={modalData.get("pic14")._url}
                      alt="property picture"
                    />
                  </Carousel.Slide>
                )}
                {/*          
                {modalData?.get("video1")?._url && (
                  <Carousel.Slide>
                    <video
                      src={modalData.get("video1")._url}
                      alt="property video"
                      video controls="controls"
                      type="video/mp4"
                    />
                  </Carousel.Slide>
                )} */}
              </Carousel>
              {modalData?.get("video0")?._url && (
                <Box
                  w={{ base: 300, sm: 600 }}
                  mt={15}
                  mah={400}
                  mx="auto"
                  sx={{ border: "1px solid black" }}
                >
                  <video
                    src={modalData.get("video0")._url}
                    alt="property video"
                    video
                    controls="controls"
                    type="video/mp4"
                    width="100%"
                    height="100%"
                  />
                </Box>
              )}
              <Group
                w="100%"
                mt={10}
                mb={40}
                p={10}
                bg="blue.4"
                position="center"
                sx={{
                  position: "sticky",
                  top: 44,
                  alignItems: "flex-end",
                  zIndex: 12,
                }}
              >
                {/* <Group position="center">
                  <Avatar
                    size={40}
                    radius="xl"
                    src={
                      modalData?.get("agentPointer")?.get("profilePic")?._url
                    }
                    alt="agent profile picture"
                  />
                </Group> */}
               <PhoneNumberButton phoneNumber={phoneNumber} />
              <WhatsappButton phoneNumber={phoneNumber} propertyCode={propertyCode}/>
              </Group>
              <Flex
                py={30}
                direction={{ base: "column", xs: "row" }}
                justify={"center"}
                gap={10}
              >
                <PlaceDetails item={modalData} modal={true} />

                <AgentCard item={modalData} />
              </Flex>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PropertyModal;
