"use client";
import { MenuBar } from "./MenuBar";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { generateHTML } from "@tiptap/react";
import { useEffect } from "react";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import FileHandler from "@tiptap-pro/extension-file-handler";
import "./style.css";

export default function EditorPage() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.extend({
        inline: false, // Ensure the image is treated as a block element
        group: "block", // Set the group to "block" to avoid wrapping in paragraphs
        draggable: true, // Optional: make images draggable
      }),

      // file

      FileHandler.configure({
        allowedMimeTypes: [
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/webp",
        ],
        onDrop: (currentEditor, files, pos) => {
          files.forEach((file) => {
            const formData = new FormData();
            formData.append("file", file);

            // Upload file to Next.js API endpoint
            fetch("/api/upload", {
              method: "POST",
              body: formData,
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Upload response data:", data);

                if (data.imageURL) {
                  // Insert image with the URL returned from the server
                  currentEditor
                    .chain()
                    .insertContentAt(pos, {
                      type: "image",
                      attrs: {
                        //   src: `https://dccvcdil526gz.cloudfront.net/${data.imageURL}`,  // Use the uploaded image URL from the response
                        src: `https://${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN}.cloudfront.net/${data.imageURL}`, // Use the uploaded image URL from the response
                        alt: "Blog Banner"
                      },
                    })
                    .focus()
                    .run();
                }
              })
              .catch((error) => {
                console.error("Error uploading file:", error);
              });
          });
        },
        // onPaste: (currentEditor, files, htmlContent) => {
        //   files.forEach(file => {
        //     if (htmlContent) {
        //       // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
        //       // you could extract the pasted file from this url string and upload it to a server for example
        //       console.log(htmlContent) // eslint-disable-line no-console
        //       return false
        //     }

        //     const formData = new FormData();
        //     formData.append('file', file);

        //     // Upload file to Next.js API endpoint
        //     fetch('/api/upload', {
        //       method: 'POST',
        //       body: formData,
        //     })
        //     .then(response => response.json())
        //     .then(data => {

        //         console.log("on drop data");
        //         console.log("on drop data",data);

        //         if (data.url) {
        //         // Insert image with the URL returned from the server
        //         const fileReader = new FileReader()

        //         fileReader.readAsDataURL(file)
        //         fileReader.onload = () => {
        //           currentEditor.chain().insertContentAt(currentEditor.state.selection.anchor, {
        //             type: 'image',
        //             attrs: {
        //               src: data.url,
        //             },
        //           }).focus().run()
        //         }

        //         // currentEditor.chain().insertContentAt(pos, {
        //         //   type: 'image',
        //         //   attrs: {
        //         //     src: data.imageId,  // Use the uploaded image URL
        //         //   },
        //         // }).focus().run();
        //       }
        //     })
        //     .catch(error => {
        //       console.error("Error uploading file:", error);
        //     });

        //     const fileReader = new FileReader()

        //     fileReader.readAsDataURL(file)
        //     fileReader.onload = () => {
        //       currentEditor.chain().insertContentAt(currentEditor.state.selection.anchor, {
        //         type: 'image',
        //         attrs: {
        //           src: fileReader.result,
        //         },
        //       }).focus().run()
        //     }
        //   })
        // },
      }),
      // file

      // file 2
      // FileHandler.configure({
      //     allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],

      //     // Handler for file drop
      //     onDrop: (currentEditor, files, pos) => {
      //         console.log("on drop");
      //       files.forEach(file => {
      //         const formData = new FormData();
      //         formData.append('file', file);

      //         // Upload file to Next.js API endpoint
      //         fetch('/api/upload', {
      //           method: 'POST',
      //           body: formData,
      //         })
      //         .then(response => response.json())
      //         .then(data => {

      //             console.log("on drop data");
      //             console.log("on drop data",data);

      //             if (data.url) {
      //             // Insert image with the URL returned from the server
      //             currentEditor.chain().insertContentAt(pos, {
      //               type: 'image',
      //               attrs: {
      //                 src: data.imageId,  // Use the uploaded image URL
      //               },
      //             }).focus().run();
      //           }
      //         })
      //         .catch(error => {
      //           console.error("Error uploading file:", error);
      //         });
      //       });
      //     },

      //     // Handler for file paste
      //     onPaste: (currentEditor, files, htmlContent) => {
      //         console.log("on paste");

      //         files.forEach(file => {
      //         if (htmlContent) {
      //           // Let other extensions handle HTML content insertion
      //           console.log(htmlContent);
      //           return false;
      //         }
      //   console.log("on paste");

      //         const formData = new FormData();
      //         formData.append('file', file);

      //         // Upload file to Next.js API endpoint
      //         fetch('/api/upload', {
      //           method: 'POST',
      //           body: formData,
      //         })
      //         .then(response => response.json())
      //         .then(data => {
      //             console.log("on paste data",data);

      //           if (data.url) {
      //             // Insert image with the URL returned from the server
      //             currentEditor.chain().insertContentAt(currentEditor.state.selection.anchor, {
      //               type: 'image',
      //               attrs: {
      //                 src: data.url,
      //               },
      //             }).focus().run();
      //           }
      //         })
      //         .catch(error => {
      //           console.error("Error uploading file:", error);
      //         });
      //       });
      //     },
      //     }),

      // file 2
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "p-4 prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl  focus:outline-none outline-none border border-blue-600 bg-white text-black min-h-[250px]",
      },
      // handlePaste: async (view, event) => {
      //     const items = Array.from(event.clipboardData.items);

      //     for (const item of items) {
      //         if (item.kind === 'file' && item.type.startsWith('image/')) {
      //             const file = item.getAsFile();
      //             const formData = new FormData();
      //             formData.append('file', file);

      //             // Replace this URL with your actual upload endpoint
      //             const response = await fetch('/api/upload', {
      //                 method: 'POST',
      //                 body: formData,
      //             });

      //             const data = await response.json();

      //             // Assuming the response contains the image URL
      //             const imageUrl = data.url;
      //             editor.commands.setImage({ src: imageUrl });
      //         }
      //     }

      //     return true; // Prevent default paste handling
      // },
    },
  });

  if (!editor) {
    return <p>Loading editor...</p>;
  }

  const handleSubmit = () => {
    const content = editor.getHTML();
    fetch("/api/addBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Inform the server that you're sending JSON
      },
      body: JSON.stringify({ content }),
    })
      .then((response) => response.json())
      // .then((data) => {
      //   console.log("data from api response ", data);
      // });
  };

  return (
    <div className=" p-4 border border-yellow-100">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-800 hover:bg-zinc-500 text-white rounded"
      >
        Done
      </button>
    </div>
  );
}
