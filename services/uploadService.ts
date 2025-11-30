/**
 * This file handles the client-side upload request.
 * The actual Firebase upload happens inside `/api/upload`.
 */

export const uploadFileToFirebase = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  // Call the server API
  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  const data = await response.json();
  return data.url; // Public Firebase URL
};
