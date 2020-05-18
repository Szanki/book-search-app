import React from "react";

export default function FeedbackComponent({
  wasRequestEmpty,
  noBooks,
  noSearchTerm,
  noUserBooks,
}) {
  if (wasRequestEmpty) {
    return (
      <div className="feedback-component">
        Can't found any matches. Try another one.
      </div>
    );
  }

  if (noBooks) {
    return noSearchTerm ? (
      <div className="feedback-component">
        Please click on "Search" button to find some books{" "}
      </div>
    ) : (
      <div className="feedback-component">Please fill search input above.</div>
    );
  }
  if (noUserBooks) {
    return <div className="feedback-component">You don't have any books!</div>;
  } else return null;
}
