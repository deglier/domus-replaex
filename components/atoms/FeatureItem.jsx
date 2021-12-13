import Image from "next/image"
import Container from "./Container"

export default function FeatureItem(props) {
  return (
    <Container large className={`py-6 px-6 lg:px-0 lg:py-0 lg:flex lg:justify-center lg:gap-x-6 ${props.reverse ? "flex-row-reverse" : ""} ${props.className}`}>
      <div className="max-w-[629px] lg:min-w-[629px] hidden lg:block ">
        <Image placeholder="blur" src={props.image} />
      </div>
      <div className={`px-6 ${props.reverse ? "lg:pl-40":"lg:pr-40"  }`}>
        <h2 className="text-brand-complementary-down text-2xl leading-tight font-normal mt-14 lg:mb-14">Muito mais <strong className="text-[2.5rem]">{props.keyword}</strong></h2>
        {props.features.map((feature, index) => (
          <div className="flex gap-x-4 mt-8 first:mt-0" key={index}>
            <div>
              <svg width="15" height="25" viewBox="0 0 15 25" className="text-brand-complementary-pure" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L15 5.68182V19.3182L0 25V0Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="text-neutral-light-pure">
              <h3 className="text-xl font-medium leading-tight mb-3">{feature.title}</h3>
              <p className="text-base leading-tight font-normal">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}