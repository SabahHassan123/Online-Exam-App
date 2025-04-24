import { getServerSession } from "next-auth";
import { JSON_HEADER } from "../constants/api.contants";
import { authOptions } from "@/auth";

export async function GetAllSubjects() {
  // get token
  const session = await getServerSession(authOptions);
  console.log(session!.token);

  const response = await fetch(`${process.env.API}/subjects`, {
    method: "GET",
    headers: {
      ...JSON_HEADER,
      token: session!.token,
    },
  });

  const result: APIResponse<GetAllSubjectsResponse> = await response.json();

  if ("code" in result) {
    return {
      success: false,
      message: result.message,
    };
  } else {
    return {
      success: true,
      subjects: result.subjects,
    };
  }
}

export async function GetAllExams() {
  // get token
  const session = await getServerSession(authOptions);
  console.log(session!.token);

  const response = await fetch(`${process.env.API}/exams`, {
    method: "GET",
    headers: {
      ...JSON_HEADER,
      token: session!.token,
    },
  });
  const result: APIResponse<GetAllExams> = await response.json();

  if ("code" in result) {
    return {
      success: false,
      message: result.message,
    };
  } else {
    return {
      success: true,
      exams: result.exams,
    };
  }
}
