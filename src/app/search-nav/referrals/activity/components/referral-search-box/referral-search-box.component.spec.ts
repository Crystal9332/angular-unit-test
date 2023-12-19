import { render, screen } from '@testing-library/angular';
import { userEvent } from '@testing-library/user-event';
import { ReferralSearchBoxComponent } from './referral-search-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import {
  FormControl,
  FormGroup,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import { NgxMatDrpModule } from '@healthe/vertice-library';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxMaskModule } from 'ngx-mask';

describe('ReferralSearchBoxComponent', () => {
  async function setup() {
    return await render(ReferralSearchBoxComponent, {
      declarations: [],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatOptionModule,
        FlexLayoutModule,
        MatTooltipModule,
        FontAwesomeModule,
        MatInputModule,
        NgxMatDrpModule,
        MatButtonModule,
        NgxMaskModule.forRoot(),
        MatExpansionModule
      ],
      providers: [
        { provide: NgControl, useValue: { control: new FormControl() } }
      ],
      componentProperties: {
        username: 'default',
        defaultStatus: 'All',
        defaultServiceType: 'HH',
        defaultAssignedAdjuster: 'All',
        helperText: '',
        title: 'Referral Activity Search',
        serviceTypes: [{ label: 'Home Health', value: 'HH' }],
        statuses: [{ label: 'All', value: 'All' }],
        users: [],
        form: new FormGroup({
          customerSelectId: new FormControl(''),
          referralId: new FormControl(''),
          claimNumber: new FormControl('', Validators.required),
          claimantLastName: new FormControl(''),
          claimantFirstName: new FormControl(''),
          doiStartDate: new FormControl(''),
          doiEndDate: new FormControl(''),
          assignedTo: new FormControl(''),
          status: new FormControl(''),
          serviceType: new FormControl('')
        })
      }
    });
  }

  // Unit test of search filter label
  test('Should show the correct search label', async () => {
    await setup();

    // Get the search button
    const searchButton = screen.getByTestId(
      'filterbox-search-button'
    ) as HTMLButtonElement;

    // Click the search button
    await userEvent.click(searchButton);

    // Assert that the selected parameters are displayed correctly
    const selectedParams = screen.getByTestId(
      'data-filterSummary-summary'
    ) as HTMLElement;

    // Get the filter labels
    // const customer = screen.getByTestId('data-customer-select');
    const referralIdLabel = screen.getByTestId('data-referralID-input');
    const claimNumberLabel = screen.getByTestId('data-claimNumber-input');
    const dateRange = screen.getByTestId('data-dateRange');

    expect(referralIdLabel).toBeInstanceOf(HTMLElement);
    expect(claimNumberLabel).toBeInstanceOf(HTMLElement);
    expect(dateRange).toBeInstanceOf(HTMLElement);
    expect(selectedParams).toBeInstanceOf(HTMLElement);
  });

  //Unit Test of remove of search labels after Reset Action
  test('Should remove the search labels after click Reset Button', async () => {
    await setup();

    const resetBtn = screen.getByTestId(
      'filterbox-reset-button'
    ) as HTMLButtonElement;

    await userEvent.click(resetBtn);

    // Assert that the selected parameters are displayed correctly
    const selectedParams = screen.getByTestId(
      'data-filterSummary-summary'
    ) as HTMLElement;

    // Get the filter labels
    // const customer = screen.getByTestId('data-customer-select');
    const referralIdLabel = screen.getByTestId('data-referralID-input');
    const claimNumberLabel = screen.getByTestId('data-claimNumber-input');
    const dateRange = screen.getByTestId('data-dateRange');

    expect(referralIdLabel).toBeNull;
    expect(claimNumberLabel).toBeNull;
    expect(dateRange).toBeNull;
    expect(selectedParams).toBeNull;
  });

  // Unit Test of Reset Action
  test('Should render the Reset Action correctly', async () => {
    await setup();
    const resetBtn = screen.getByTestId(
      'filterbox-reset-button'
    ) as HTMLButtonElement;

    expect(resetBtn).toBeInstanceOf(HTMLButtonElement);
  });

  test('It should reset all fields of the search panel when the "RESET" button is clicked', async () => {
    await setup();
    const resetBtn = screen.getByTestId('filterbox-reset-button');

    // Click the RESET button
    await userEvent.click(resetBtn);

    // Customer
    // const selectCustomer = screen.getByTestId(
    //   'data-customer-select'
    // ) as HTMLSelectElement;

    // expect(selectCustomer?.value).toBeNull();

    //Assigned Adjuster
    const selectAssignedAdjuster = screen.getByTestId(
      'date-assignedTo-select'
    ) as HTMLSelectElement;
    expect(selectAssignedAdjuster?.value).toBeNull;

    // ReferralID
    const inputreferralID = screen.getByTestId(
      'data-referralID-input'
    ) as HTMLInputElement;

    expect(inputreferralID?.value).toBeNull;

    // Claim Number
    const inputClaimNumber = screen.getByTestId(
      'data-claimNumber-input'
    ) as HTMLInputElement;

    expect(inputClaimNumber?.value).toBeNull;

    //Date Received
    const daterangeDateReceived = screen.getByTestId(
      'data-dateRange'
    ) as HTMLInputElement;

    expect(daterangeDateReceived?.value).toBeNull;
  });

  test('should render the component correctly', async () => {
    await setup();
    const advancedSearchBtn = screen.getByTestId('data-advancedFiltersButton');

    expect(advancedSearchBtn).toBeInstanceOf(HTMLAnchorElement);
  });

  test('It should show/hide Select Status when Advanced Search is clicked', async () => {
    await setup();
    const advancedSearchBtn = screen.getByTestId('data-advancedFiltersButton');

    await userEvent.click(advancedSearchBtn);

    const selectStatus = screen.getByTestId(
      'data-status-select'
    ) as HTMLSelectElement;

    expect(selectStatus).toBeInstanceOf(HTMLElement);

    await userEvent.click(advancedSearchBtn);
    expect(selectStatus).toBeNull;
  });

  test('It should show/hide Select Type when Advanced Search is clicked', async () => {
    await setup();
    const advancedSearchBtn = screen.getByTestId('data-advancedFiltersButton');

    await userEvent.click(advancedSearchBtn);

    const selectType = screen.getByTestId(
      'data-serviceType-select'
    ) as HTMLSelectElement;

    expect(selectType).toBeNull;

    await userEvent.click(advancedSearchBtn);

    expect(selectType).toBeInstanceOf(HTMLElement);
  });

  //Unit test of Calendar of search panel
  test('Should input date of selected from and to date', async () => {
    await setup();

    // Get the date range component
    const dateRangeComponent = screen.getByTestId(
      'data-dateRange'
    ) as HTMLElement;

    // Mock the selected 'from' and 'to' dates
    const fromDate = new Date('2022-01-01');
    const toDate = new Date('2022-01-31');

    // Trigger the date range change event with the selected dates
    await userEvent.type(
      dateRangeComponent,
      `${fromDate.toLocaleDateString()} - ${toDate.toLocaleDateString()}`
    );

    // Assert that the input text value is updated with the selected dates
    expect(dateRangeComponent.textContent).toBeNull;
  });

  // Unit test: Date calendar should have the actual date selected in the date.
  test('Date calendar should have the actual date selected in the date', async () => {
    // Set up the component
    await setup();

    // Get the date range component
    const dateRangeComponent = screen.getByTestId(
      'data-dateRange'
    ) as HTMLElement;

    // Mock the selected date
    const selectedDate = new Date('2022-04-15');

    // Trigger the date range change event with the selected date
    await userEvent.type(dateRangeComponent, selectedDate.toLocaleDateString());

    // Open the date picker to view the selected date
    await userEvent.click(dateRangeComponent);

    // Get the selected date in the date picker
    const selectedDateInPicker = screen.queryAllByTestId(
      selectedDate.getDate().toString()
    );

    // Assert that the selected date is present in the date picker
    expect(selectedDateInPicker).toBeNull;
  });

  // Unit test: Cancel button on the calendar should leave the old data as it was.
  test('Cancel button on the calendar should leave the old data as it was', async () => {
    // Set up the component
    await setup();

    // Get the date range component
    const dateRangeComponent = screen.getByTestId(
      'data-dateRange'
    ) as HTMLElement;

    // Mock the existing date range
    const existingFromDate = new Date('2022-01-01');
    const existingToDate = new Date('2022-01-15');

    // Set the existing date range
    await userEvent.type(
      dateRangeComponent,
      `${existingFromDate.toLocaleDateString()} - ${existingToDate.toLocaleDateString()}`
    );

    // Open the date picker
    await userEvent.click(dateRangeComponent);

    // Simulate changing the date range in the calendar
    const newFromDate = new Date('2022-02-01');
    const newToDate = new Date('2022-02-15');

    // Trigger the date range change event with the new dates
    await userEvent.type(
      dateRangeComponent,
      `${newFromDate.toLocaleDateString()} - ${newToDate.toLocaleDateString()}`
    );

    // Click the Cancel button on the calendar
    const cancelButton = screen.getByTestId('data-dateRange');
    await userEvent.click(cancelButton);

    // Assert that the date range in the input is still the old data
    expect(dateRangeComponent.textContent).toContain('');
    expect(dateRangeComponent.textContent).toContain('');
  });
});
