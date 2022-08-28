import React, { useState, useEffect, useRef, ReactElement } from 'react';
import style from './index.module.scss';
import Input from '../Input';
import FormInput from '../Input/FormInput';
import Button from 'src/components/Button';
import ModalHeader from './ModalHeader';
import invoiceService from 'src/services/invoice.service';

import { useStoreContext } from 'src/context/store';

const NewInvoice = (props: any) => {
  const storeContext = useStoreContext();

  const formRef = useRef<HTMLFormElement>(null);

  const billToRef = useRef<HTMLInputElement>(null);
  const billFromRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const noRef = useRef<HTMLInputElement>(null);
  const dueRef = useRef<HTMLInputElement>(null);
  const receiveToRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState<number>(1);

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    //console.log(e);
  };

  const parseItems = (x: any) => {
    let array: any = [];
    let tempObj: any = {};
    for (let i = 0; i < items; i++) {
      x.map((att: any) => {
        if (att.key == i) tempObj[att.type] = att.value;
      });
      array.push(tempObj);
      tempObj = {};
    }

    return array;
  };

  const getInvoiceItems = () => {
    let items: any = [];
    if (formRef.current)
      Array.from(formRef.current.children).map((child) => {
        if (child.getAttribute('id') == '0') {
          Array.from(child.children).map((nestedChild) => {
            Array.from(nestedChild.children).map((div) => {
              if (div.firstChild) {
                let id = div.firstChild.getAttribute('id');
                let key = parseInt(id.substring(0, 1));
                let type = id.substring(1, 2);
                let value = div.firstChild.getAttribute('value');

                items.push({
                  key: key,
                  type: type == 'a' ? 'description' : 'amount',
                  value: value,
                });
              }
            });
          });
        }
      });

    return parseItems(items);
  };

  const handleClick = async () => {
    let invoiceItems: any;
    if (
      !billToRef.current?.value ||
      !billFromRef.current?.value ||
      !titleRef.current?.value ||
      !noRef.current?.value ||
      !dueRef.current?.value ||
      !receiveToRef.current?.value
    )
      return;

    if (formRef.current) invoiceItems = getInvoiceItems();

    let response = await invoiceService.create({
      email: billToRef.current.value,
      from: billFromRef.current.value,
      title: titleRef.current.value,
      no: noRef.current.value,
      due: dueRef.current.value,
      receiveTo: receiveToRef.current.value,
      items: invoiceItems,
      store: storeContext,
    });

    if (response instanceof Error) return console.log(response);
    props.close();
  };

  const handleAddItem = () => {
    setItems((items: number) => ++items);
  };

  const inputItems = () => {
    let array = [];
    for (let i = 0; i < items; i++) {
      array.push(
        <div id={'0'} className={style.invoiceItemContainer}>
          <FormInput
            id={`${i}a`}
            className={style.input}
            type="text"
            value=""
            placeholder="Type your description here"
            onChange={handleChange}></FormInput>

          <FormInput
            id={`${i}b`}
            className={style.input}
            type="number"
            value=""
            placeholder="00.00"
            onChange={handleChange}></FormInput>
        </div>
      );
    }
    return array;
  };

  return (
    <>
      <ModalHeader close={props.close} title={props.title} />
      <div className={style.modalContent}>
        <form ref={formRef}>
          <div className={style.sectionTitle}>INVOICE DETAILS</div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Bill To</div>
            <FormInput
              ref={billToRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Email"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Bill From</div>
            <FormInput
              ref={billFromRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Address, City Country, Position"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Title</div>
            <FormInput
              ref={titleRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Title"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Invoice No</div>
            <FormInput
              ref={noRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Number"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Due Date</div>
            <FormInput
              ref={dueRef}
              className={style.input}
              type="text"
              value=""
              placeholder="00.00.0000"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.sectionTitle}>PAYMENT DETAILS</div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Receive To</div>
            <FormInput
              ref={receiveToRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Select a wallet or type of address"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.sectionTitle}>INVOICE ITEMS</div>

          {inputItems()}

          <div className={style.invoiceItemContainer}>
            <div className={style.addItem} onClick={handleAddItem}>
              Add another item
            </div>
          </div>

          <div className={style.buttonContainer}>
            <Button
              className={style.button}
              type="secondary"
              theme="light"
              height={36}
              onClick={handleClick}>
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewInvoice;
