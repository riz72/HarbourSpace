import * as React from "react";

export default function Chevron(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      space="preserve"
    >
      <path
        fill={props.fill}
        d="M509.121,125.966c-3.838-3.838-10.055-3.838-13.893,0L256.005,365.194L16.771,125.966c-3.838-3.838-10.055-3.838-13.893,0c-3.838,3.838-3.838,10.055,0,13.893l246.18,246.175c1.842,1.842,4.337,2.878,6.947,2.878c2.61,0,5.104-1.036,6.946-2.878l246.17-246.175C512.959,136.021,512.959,129.804,509.121,125.966z"
      />
    </svg>
  );
}
