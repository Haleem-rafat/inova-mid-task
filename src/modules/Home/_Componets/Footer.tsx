import { ReactSVG } from 'react-svg';
import mainLogo from '@assets/img/main-logo.svg';
import { Button } from '@UI/index';

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-24 bg-bgFooter ">
      <div className="mx-auto max-w-7xl p-10 ">
        <div className="flex items-center justify-between border-b pb-10 text-white">
          <ReactSVG src={mainLogo} />
          <div>
            <p>Join our</p>
            <p>Newsetter</p>
          </div>

          <div className="flex ">
            <input className="bg-transparent text-white placeholder:text-gray-400" />
            <Button>Subscribe</Button>
          </div>
        </div>

        <div className="flex gap-x-36 pt-12 text-white">
          <div className="max-w-[300px]">
            Lorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s
          </div>
          <div className="flex flex-col gap-y-8">
            <p>New</p>
            <p>Tournaments</p>
            <p>Coureses</p>
            <p>E-Book</p>
          </div>
          <div className="flex flex-col gap-y-8">
            <p>Privacy policies</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
