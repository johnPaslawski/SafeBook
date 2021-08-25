using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SafeBook.EfCore.Migrations
{
    public partial class NewsConfiguration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "News",
                columns: new[] { "Id", "CreationDate", "Description", "ImageName", "Title" },
                values: new object[] { 1, new DateTime(2021, 8, 2, 19, 34, 31, 273, DateTimeKind.Local).AddTicks(5860), "fsdfsdDecription of this cool news", null, "News nr 1" });

            migrationBuilder.InsertData(
                table: "News",
                columns: new[] { "Id", "CreationDate", "Description", "ImageName", "Title" },
                values: new object[] { 2, new DateTime(2021, 8, 2, 19, 34, 31, 278, DateTimeKind.Local).AddTicks(9326), "asdasdasdasd of this cool news", null, "News nr 2" });

            migrationBuilder.InsertData(
                table: "News",
                columns: new[] { "Id", "CreationDate", "Description", "ImageName", "Title" },
                values: new object[] { 3, new DateTime(2021, 8, 2, 19, 34, 31, 278, DateTimeKind.Local).AddTicks(9410), "rtyrtyrty of this cool news", null, "News nr 3" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "News",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "News",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "News",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
