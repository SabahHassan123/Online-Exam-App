import { JSON_HEADER } from "../constants/api.contants";
import decodeToken from "../utils/get-token";

export async function getAllSubjects() {
  // get token
  const session = await decodeToken();

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

export async function getAllExams() {
  // get token
  const session = await decodeToken();

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
