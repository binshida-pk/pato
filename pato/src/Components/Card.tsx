type Props = {
  image?: string;
  text?: string;
  title?: string;
};

const Card = ({ image, text, title }: Props) => {
  return (
    <div className="flex justify-center w-full mb-5">
      <div className="mt-4 bg-gray-100 w-full max-w-[320px] p-4 rounded ">
        {image && (
          <img src={image} alt={title} className="w-full h-auto rounded" />
        )}
        <h3 className="mt-2 text-lg font-semibold text-center">{title}</h3>
        <p className="mt-2  text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Card;
