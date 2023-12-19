import { BillingHistory } from '../../claim-view/store/models/billing.models';

export const billingTabData: BillingHistory = {
  claimNumber: 'C000662',
  customerCode: 'TRAVELERS',
  userName: 'travelersdefault',
  productType: 'ALL',
  serviceFromDate: '01/01/1995',
  serviceToDate: '10/01/2025',
  totalNumberOfRows: '512',
  totalBilledAmount: '$242,735.28',
  totalUcFeeAmount: '$209,328.72',
  totalPaidFee: '$0.00',
  totalPaidAmount: '$149,718.51',
  billHistory: [
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '16729013616',
      itemName: 'CLONAZEPAM   TAB 0.5MG',
      quantity: '30.0',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$33.37',
      ucFeeAmount: '$33.37',
      paidAmount: '$15.92',
      paidFee: '$0.00',
      paidDate: '10/10/2018',
      imageNumber: '00025152531',
      imagePath: '/Some/wierdPath',
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Paid',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath:
        'http://tomcat6-jdk8.ocp.hestest.com/HesReporting/view_eob3.jsp?disp=2&imageNumber=00025152531&productName=PBM'
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '10/10/2018',
      code: '10702005601',
      itemName: 'OXYCODONE    TAB 10MG',
      quantity: '112.0',
      daysSupply: '28',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$93.33',
      ucFeeAmount: '$93.33',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Staged',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '50',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '10/10/2018',
      code: '00548560200',
      itemName: 'ENOXAPARIN   INJ 40/0.4ML',
      quantity: '5.6',
      daysSupply: '7',
      prescriberName: 'JOHN THOMAS GRIFFIN',
      prescriberID: '1053399873',
      billedAmount: '$132.20',
      ucFeeAmount: '$132.20',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Staged',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/28/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30.0',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Staged',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '80',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1920683',
      providerName: 'WAL-MART PHARMACY',
      serviceDate: '09/28/2018',
      code: '00832105415',
      itemName: 'BACLOFEN     TAB 10MG',
      quantity: '20.0',
      daysSupply: '10',
      prescriberName: 'JOHN THOMAS GRIFFIN',
      prescriberID: '1053399873',
      billedAmount: '$61.82',
      ucFeeAmount: '$61.82',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Staged',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$740.17',
      ucFeeAmount: '$740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$712540.17',
      ucFeeAmount: '$14740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$52740.17',
      ucFeeAmount: '$251740.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$72140.17',
      ucFeeAmount: '$745210.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$721440.17',
      ucFeeAmount: '$74420.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$42740.17',
      ucFeeAmount: '$7420.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    },
    {
      claimNumber: 'C000662',
      productType: 'PHARMACY',
      providerID: '1933224',
      providerName: 'WALGREENS',
      serviceDate: '09/27/2018',
      code: '63481068706',
      itemName: 'LIDODERM     DIS 5%',
      quantity: '30',
      daysSupply: '30',
      prescriberName: 'VANCHI RONNI VU',
      prescriberID: '1265638167',
      billedAmount: '$720.17',
      ucFeeAmount: '$2440.17',
      paidAmount: '$0.00',
      paidFee: '$0.00',
      paidDate: '',
      imageNumber: '',
      imagePath: null,
      billSource: 'POS',
      dataSource: 'Healthe Systems',
      status: 'Credit',
      modifiedBy: '',
      copayPercentage: '',
      copayAmount: '0',
      eobPath: null
    }
  ]
};
