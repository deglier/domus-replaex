import FeatureItem from "../atoms/FeatureItem";

export default function FeatureList(props) {
  return props.items.map((feature, index) => {
    return (
      <FeatureItem
      className={index > 0 ? "mt-6" : ""}
        key={index}
        reverse={feature.reverse}
        keyword={feature.keyword}
        image={feature.image}
        features={feature.features}
      />
    );
  }
  );
}