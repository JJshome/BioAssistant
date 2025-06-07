terraform {
  required_version = ">= 1.0"

  // Example backend configuration (e.g., S3 for state storage)
  /*
  backend "s3" {
    bucket         = "your-terraform-state-bucket-name"
    key            = "biotech-ai-platform/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "your-terraform-lock-table"
  }
  */
}

provider "aws" { // Example provider
  region = "us-east-1"
}

// Define resources here
// Example:
// resource "aws_vpc" "main" {
//   cidr_block = "10.0.0.0/16"
// }
