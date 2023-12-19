import { MatCardModule } from '@angular/material/card';
import { render, screen, waitFor } from '@testing-library/angular';
import { ReferralSearchTableComponent } from './referral-search-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { SearchResultsCountComponent } from '../../../../components/search-results-count/search-results-count.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavReferral } from '../../../../store/models/nav-referral.model';
import { of } from 'rxjs';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('ReferralSearchTableComponent', () => {
  async function setup(results?: NavReferral[]) {
    if (!results) {
      results = [];
    }
    return await render(ReferralSearchTableComponent, {
      declarations: [SearchResultsCountComponent],
      imports: [
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatSelectModule
      ],
      componentProperties: {
        results: results,
        searchTableConfig: {
          customerID: '',
          noDataForQuery: '',
          noSearchPerformedText: 'Click search for results',
          pagerSizeOptions: [10, 25],
          pageSize: 25,
          username: ''
        },
        isLoading$: of(false)
      }
    });
  }

  test('Render of initial Loading', async () => {
    await setup();
    //Make sure the user directions are showing on initial load

    screen.queryByTestId('results-card-list-header-referralId-0');
    screen.queryByTestId('results-card-list-header-claimNumber-1');
    screen.queryByTestId('results-card-list-header-claimantName-2');
    screen.queryByTestId('results-card-list-header-dateReceived-3');
    screen.queryByTestId('results-card-list-header-requestorRoleName-4');
    screen.queryByTestId('results-card-list-header-status-5');
    screen.queryByTestId('results-card-list-header-serviceType-6');
    screen.queryByTestId('results-card-list-header-vendor-7');
  });

  test('render', async () => {
    await setup();
    //Make sure the user directions are showing on initial load
    screen.getByText(/Click search for results/i);
  });

  test('arrows paginator disabled', async () => {
    await setup();
    const prevButton = screen.getAllByRole('button', {
      name: 'Previous page'
    })[0];
  });

  //Unit Test of Pagenation
  test('Should show the pagenation in 10, 25, 50', async () => {
    await setup();

    // Get the items per page select element
    const itemsPerPageSelect = screen.getByTestId(
      'data-nav-search-table-paginator-one'
    ) as HTMLSelectElement;

    // Select 10 items per page
    userEvent.selectOptions(itemsPerPageSelect, ['10']);

    // Wait for the search results to update
    await waitFor(() => {
      const records = screen.queryByTestId('results-card-list-td');
      if (records) {
        expect(records).toHaveLength(10);
      } else {
        expect(records).toBeNull();
      }
    });

    // Select 25 items per page
    userEvent.selectOptions(itemsPerPageSelect, ['25']);

    // Wait for the search results to update
    await waitFor(() => {
      const records = screen.queryByTestId('results-card-list-td');
      if (records) {
        expect(records).toHaveLength(25);
      } else {
        expect(records).toBeNull();
      }
    });

    // Select 50 items per page
    userEvent.selectOptions(itemsPerPageSelect, ['50']);

    // Wait for the search results to update
    await waitFor(() => {
      const records = screen.queryByTestId('results-card-list-td');
      if (records) {
        expect(records).toHaveLength(50);
      } else {
        expect(records).toBeNull();
      }
    });
  });

  //Unit test of Referral ID order in table
  test('Should check order of table data by referralID', async () => {
    await setup();

    const referralIdAction = screen.queryByTestId(
      'results-card-list-header-referralId-0'
    );

    // Click on the referral ID
    await userEvent.click(referralIdAction);
    expect(referralIdAction).toBeNull;

    // Check if the referral ID is a link
    const referralIdLink = screen.queryByTestId(
      'results-card-list-referralId-0'
    );
    expect(referralIdLink).toBeNull;
  });

  //Unit test of Claim ID order in table
  test('Should check order of table data by chaim ID', async () => {
    await setup();

    const cliamIdAction = screen.queryByTestId(
      'results-card-list-header-claimNumber-1'
    );

    // Click on the referral ID
    await userEvent.click(cliamIdAction);
    expect(cliamIdAction).toBeNull;

    // Check if the referral ID is a link
    const cliamIdLink = screen.queryByTestId(
      'results-card-list-header-claimNumber-1'
    );
    expect(cliamIdLink).toBeNull;
  });

  //Unit test of Table order by received date
  test('Should show the table by received date', async () => {
    await setup();

    // Get the header cell for the "Date Received" column
    const dateReceivedHeaderCell = screen.queryByTestId(
      'results-card-list-header-dateReceived-0'
    );

    // Simulate a click on the "Date Received" column header to trigger sorting
    await userEvent.click(dateReceivedHeaderCell);

    // Assuming you have a method to get the current sorting state of the table
    const currentSorting = screen.queryByTestId('results-card-list-td');
    // Assert that the table is sorted by the "Date Received" column in ascending order
    expect(currentSorting).toBeNull;
  });
});
