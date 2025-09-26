// Brand Convention & Nominal Typing Implementation
// This demonstrates how to create types that are structurally identical but logically distinct

// Brand Convention: Use unique symbols to create nominal types
// These symbols act as "brands" that make the types incompatible despite identical structure
declare const __brand_major: unique symbol;
declare const __brand_minor: unique symbol;

// MajorCredits interface with brand property
// The brand property makes this type distinct from MinorCredits even though both have 'credits: number'
interface MajorCredits {
  credits: number;
  __brand: typeof __brand_major; // This brand makes MajorCredits unique
}

// MinorCredits interface with brand property
// Even though it has the same structure as MajorCredits, the brand makes it a different type
interface MinorCredits {
  credits: number;
  __brand: typeof __brand_minor; // This brand makes MinorCredits unique
}

// Function to sum major credits
// This function can ONLY accept MajorCredits types, not MinorCredits or plain numbers
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  // Return a properly branded MajorCredits object
  return {
    credits: subject1.credits + subject2.credits,
    __brand: __brand_major
  };
}

// Function to sum minor credits
// This function can ONLY accept MinorCredits types, not MajorCredits or plain numbers
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  // Return a properly branded MinorCredits object
  return {
    credits: subject1.credits + subject2.credits,
    __brand: __brand_minor
  };
}

// Helper functions to create branded credit objects safely
// These functions act as "factories" to create properly branded credit objects
function createMajorCredits(credits: number): MajorCredits {
  return {
    credits: credits,
    __brand: __brand_major
  };
}

function createMinorCredits(credits: number): MinorCredits {
  return {
    credits: credits,
    __brand: __brand_minor
  };
}

