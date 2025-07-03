interface CardHomeProps {
  imageSrc: string;
  imgageName: string;
  title: string;
  description: string;
}

export default function CardHome(props: CardHomeProps) {
  return (
    <div className="min-w-[240px] bg-white rounded-xl shadow-md overflow-hidden font-family-franklin">
      <img
        src={props.imageSrc}
        alt={props.imgageName}
        className="h-32 w-full object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-900">
          {props.title}
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          {props.description}
        </p>
      </div>
    </div>
  );
}