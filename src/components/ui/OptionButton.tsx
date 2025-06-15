interface ButtonProps {
    icon: string;
    style: string;
    text: string;
    
}

export default function OptionButton(props: ButtonProps) {
    return (
        <div className="flex flex-col items-center">
      <button className="w-16 h-16 flex items-center justify-center border border-purple-700 rounded-full text-custom-purple hover:bg-purple-100 transition-colors cursor-pointer">
        <i className="fas fa-exclamation-triangle fa-2x"></i>
      </button>
      <span className="mt-2 text-custom-purple font-medium">Peligro</span>
    </div>
    );
}