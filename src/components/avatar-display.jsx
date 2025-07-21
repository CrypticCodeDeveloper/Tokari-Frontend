import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarDisplay = ({ className, src, fallback }) => {
  return (
    <Avatar className={className} >
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarDisplay;
