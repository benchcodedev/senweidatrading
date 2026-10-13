import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      company,
      country,
      email,
      phone,
      product,
      sizeThickness,
      quantity,
      port,
      message,
      locale,
    } = data;

    // Strict validation
    if (
      !name ||
      !company ||
      !country ||
      !email ||
      !phone ||
      !product ||
      !sizeThickness ||
      !quantity ||
      !port
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            locale === 'zh'
              ? '请填写所有标有星号的必填采购规格信息。'
              : 'Please provide all required specification fields.',
        },
        { status: 400 }
      );
    }

    const inquiryId = `SWD-${Date.now().toString().slice(-6)}`;

    // In a production environment, send email via Resend/SendGrid/SMTP or log to CRM:
    // console.log(`[RFQ RECEIVED: ${inquiryId}]`, { name, company, country, email, phone, product, sizeThickness, quantity, port, message, locale });

    return NextResponse.json({
      success: true,
      inquiryId,
      message:
        locale === 'zh'
          ? '询盘已成功登记，外贸工程团队将在12小时内处理。'
          : 'RFQ logged successfully. Our export desk will review within 12 business hours.',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
