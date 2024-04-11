import React from 'react'
import Link from "next/link";

export default function MailtoBTN({ mailto, label }) {

    return (
      <>
        <Link
          href='#'
          onClick={
            (e) => {
              window.location.href = mailto;
              e.preventDefault();
            }
          }
          mailto={mailto}
        >
        {label}
        </Link>
      </>
    )
}
