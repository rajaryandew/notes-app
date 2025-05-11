import Image from "next/image";

export default function Home() {
  return (
    <Card className="w-full h-full p-4">
      <CardHeader className="flex mb-3 p-4 justify-between w-full">
        <CardTitle className={`text-3xl ${roboto.className}`}>
          Notes App
        </CardTitle>
        <ProfilePicture src="https://i.pinimg.com/736x/29/18/1e/29181e64d66002fba0566b6f2f48d28d.jpg" />
      </CardHeader>
      <Content />
    </Card>
    );
}
