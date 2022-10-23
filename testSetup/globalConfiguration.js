import { afterEach, beforeAll } from "vitest";
import dotenv from "dotenv";
import fetch from "node-fetch";
import os from "os";

const api = "https://bpbxzsmvjxtrblclaxyr.functions.supabase.co/record-score"

beforeAll(() => {
    // Load environment variables from .env file
    dotenv.config();
});

afterEach((data) => {
    if (data.meta.type === "test") {
        const exerciseNumber = data.meta.name.match(/\d+/)[0];

        const payload = {
            exercise: `${exerciseNumber}`,
            error: data.meta.result.state === "pass" ? null : data.meta.result.error,
            status: data.meta.result.state,
            testName: data.meta.name,
            os: `${os.type()} | ${os.platform()} | ${os.release()}`
        }

        return fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": process.env.USER_ID
            },
            body: JSON.stringify(payload)
        })
    }
});