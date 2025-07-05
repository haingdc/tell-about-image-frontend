/// <reference lib="dom" />
"use client";

import "./dialog-master-wrapper-react.css";
import React, { useRef } from "react";
import { createComponent, type EventName } from "@lit/react";
import DialogMasterWc from "pedals-gears-wc/dialog-master";

const DialogMasterWrapper = createComponent({
  tagName: "dialog-master",
  react: React,
  elementClass: DialogMasterWc,
  events: {
    "onOpening": "opening" as EventName<CustomEvent>,
    "onOpened": "opened" as EventName<CustomEvent>,
    "onClosing": "closing" as EventName<CustomEvent>,
    "onClosed": "closed" as EventName<CustomEvent>,
    "onRemoved": "removed" as EventName<CustomEvent>,
  },
});

function DialogMaster() {
  const refMiniDialog = useRef<DialogMasterWc>(null);
  const refMegaDialog = useRef<DialogMasterWc>(null);
  const show = () => {
    refMiniDialog.current!.show();
  };
  const hide = () => {
    refMiniDialog.current!.hide();
  };

  const showMegaDialog = () => {
    refMegaDialog.current!.show();
  };
  const hideMegaDialog = () => {
    refMegaDialog.current!.hide();
  };

  const handleOpening = (event: Event) => {
    console.log("Dialog opening", event);
  };

  const handleOpened = (event: Event) => {
    console.log("Dialog opened", event);
  };

  const handleClosing = (event: Event) => {
    console.log("Dialog closing", event);
  };

  const handleClosed = (event: Event) => {
    console.log("Dialog closed", event);
  };
  const handleRemoved = (event: Event) => {
    console.log("Dialog removed", event);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={show}>Open Dialog</button>
        <DialogMasterWrapper
          modal-mode="mini"
          ref={refMiniDialog}
          onClosing={handleClosing}
          onClosed={handleClosed}
          onOpening={handleOpening}
          onOpened={handleOpened}
          onRemoved={handleRemoved}
        >
          <form method="dialog">
            <article>
              <section className="warning-message">
                <svg
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>A warning icon</title>
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
                  </path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <p>Are you sure you want to remove this user?</p>
              </section>
            </article>
            <footer>
              <menu>
                <button autoFocus type="button" onClick={hide}>
                  Cancel
                </button>
                <button type="submit" value="confirm">Confirm</button>
              </menu>
            </footer>
          </form>
        </DialogMasterWrapper>
      </div>
      <div>
        <button type="button" onClick={showMegaDialog}>Open Mega Dialog</button>
        <DialogMasterWrapper
          modal-mode="mega"
          ref={refMegaDialog}
          onClosing={handleClosing}
          onClosed={handleClosed}
          onOpening={handleOpening}
          onOpened={handleOpened}
          onRemoved={handleRemoved}
        >
          <form method="dialog">
            <header>
              <section className="icon-headline">
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
                <h3>New User</h3>
              </section>
              <button
                onClick={hideMegaDialog}
                type="button"
                title="Close dialog"
              >
                <title>Close dialog icon</title>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </header>
            <article>
              <section className="labelled-input">
                <label htmlFor="userimage">Upload an image</label>
                <input id="userimage" name="userimage" type="file" />
              </section>
              <small>
                <b>*</b> Maximum upload 1mb
              </small>
            </article>
            <footer>
              <menu>
                <button type="reset" value="clear">Clear</button>
              </menu>
              <menu>
                <button
                  autoFocus
                  type="button"
                  onClick={hideMegaDialog}
                >
                  Cancel
                </button>
                <button type="submit" value="confirm">Confirm</button>
              </menu>
            </footer>
          </form>
        </DialogMasterWrapper>
      </div>
    </div>
  );
}

export default DialogMaster;
