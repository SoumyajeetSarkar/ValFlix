import React from "react";
import Accordion from "../components/accordian";
import OptForm from "../components/opt-form";

import faqsData from "../fixtures/faqs";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <OptForm>
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Click to create an account and jump into the magical
          universe of valorant.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
