import { data } from "react-router-dom";
import { supabase } from "./supabase";
import { DatabaseZapIcon } from "lucide-react";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.messege);
  } else {
    return data;
  }
}
