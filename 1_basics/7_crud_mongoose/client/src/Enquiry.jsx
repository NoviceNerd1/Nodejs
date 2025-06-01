import React from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import EnquiryList from "./enquiry/EnquiryList";

export default function Enquiry() {
  const saveEnquiry = (e) => {
    e.preventDefault(); // Prevents page reload
    
	  let formData={

	  }
	  alert("Enquiry Saved"); // Placeholder — replace with API call later
  };

  return (
    <div>
      <h1 className="text-[40px] text-center py-6 font-bold">Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] gap-10">
        <div className="">
          <div className="bg-gray-200 p-4 rounded-xl shadow-md">
            <h2 className="text-[20px] font-bold mb-4">Enquiry Form</h2>

            <form
              className="flex max-w-md flex-col gap-4"
              onSubmit={saveEnquiry}
            >
              <div>
                <Label htmlFor="name">Your Name</Label>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Your Email</Label>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Your Phone</Label>
                <TextInput
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Leave a message..."
                  required
                  rows={4}
                />
              </div>

              <div className="pt-3">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
        <EnquiryList />
      </div>
    </div>
  );
}
