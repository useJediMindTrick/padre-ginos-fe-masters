// Importing necessary tools and functions
import { expect, test, vi, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

// Setting up fetch mock
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

// Clear all mocks after each test
afterEach(() => {
  fetchMocker.resetMocks();
});

// Sample pizza data
const testPizza = {
  id: "calabrese",
  name: "The calabrese pizza",
  category: "Supreme",
  description: "lol pizza from Calabria",
  image: "/public/pizzas/calabrese.webp",
  siza: { S: 12.25, M: 16.25, L: 20.25 },
};

// First test: check initial state
test("gives null when first called", async () => {
  //   fetch.mockResponseOnce(JSON.stringify(testPizza)); # We can also use the fetch.mockResponseOnce if we wante to
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBeNull();
});

// Second test: check API call and result
test("to call the API and give back the pizza of the day", async () => {
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());

  await waitFor(() => {
    expect(result.current).toEqual(testPizza);
    console.log(result);
  });

  expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
});

/* 
Key Differences
Library: fetch.mockResponseOnce is specific to jest-fetch-mock, 
    while fetchMocker.mockResponseOnce is specific to the custom 
    or different fetch mocking library you are using.
Instance: fetch.mockResponseOnce mocks the global fetch function, 
    whereas fetchMocker.mockResponseOnce mocks the fetch function 
    through the fetchMocker instance.
 */
