import { test, expect } from '@playwright/test'

// Declaring variable apiID to store id number of the new entry
var apiID;

// Get API call
test('API Get Request Demo', async({request}) => {
    // Declare response
    const response = await request.get('https://reqres.in/api/users/2');

    // Verify Status and Respones
    expect(response.status()).toBe(200);
    const apiTest = await response.text();
    expect(apiTest).toContain('Janet');
    console.log(await response.json());
})


// Enter new record using API POST
test('API POST Request Demo', async ({ request }) => {
    // Declare response with API Key
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "John Doe",
            "job": "Tester"
        },
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    });

    // Verify Status and Respones
    expect(response.status()).toBe(201);
    const apiTest = await response.text();
    expect(apiTest).toContain('John Doe');
    console.log(await response.json());
    apiID = await response.json();
})

// Update existing record using API PUT
test('API PUT Request Demo', async ({ request }) => {
    // Declare response with API Key
    const response = await request.put('https://reqres.in/api/users/' + apiID, {
        data: {
            "name": "John Doe",
            "job": "Developer"
        },
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })

    // Verify Status and Respones
    expect(response.status()).toBe(200);
    const apiTest = await response.text();
    expect(apiTest).toContain('John Doe');
    console.log(await response.json());
})

// Delete existing records using API DELETE
test('API DELETE Request Demo', async ({ request }) => {
    // Declare response with API Key
    const response = await request.delete('https://reqres.in/api/users/' + apiID, {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    });

    // Verify Status value
    expect(response.status()).toBe(204);
})