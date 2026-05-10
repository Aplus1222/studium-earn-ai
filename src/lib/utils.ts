import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Robustly copies text to the clipboard with a fallback for restricted environments.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  // Try modern Clipboard API
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    console.warn("Modern clipboard API failed, trying fallback...", err);
  }

  // Fallback: document.execCommand('copy')
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Ensure it's not visible but still part of the DOM
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    textArea.setAttribute("readonly", ""); // Prevent mobile keyboard from popping up
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    
    return successful;
  } catch (err) {
    console.error("Fallback clipboard copy failed: ", err);
    return false;
  }
}